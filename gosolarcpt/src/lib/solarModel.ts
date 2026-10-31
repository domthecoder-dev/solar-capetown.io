import { MODEL } from "./constants";

export type Orientation = keyof typeof MODEL.orientationFactor;
export type Backup = keyof typeof MODEL.batteryKwh;

export interface CalcInput {
  monthlyBill: number;
  orientation: Orientation;
  backup: Backup;
}

export interface CalcResult {
  monthlyKwh: number;
  systemKwp: number;
  panels: number;
  batteryKwh: number;
  costLow: number;
  costHigh: number;
  monthlySaving: number;
  annualSaving: number;
  paybackLow: number;
  paybackHigh: number;
  annualProductionKwh: number;
}

const round = (n: number, step: number) => Math.round(n / step) * step;

export function calculate({ monthlyBill, orientation, backup }: CalcInput): CalcResult {
  const bill = Math.max(0, monthlyBill);
  const monthlyKwh = bill / MODEL.tariffRPerKwh;
  const perKwp = MODEL.yieldKwhPerKwp * MODEL.orientationFactor[orientation];

  const rawKwp = (monthlyKwh * 12 * MODEL.offsetTarget) / perKwp;
  const systemKwp = Math.min(MODEL.maxKwp, Math.max(MODEL.minKwp, Math.round(rawKwp * 2) / 2));
  const annualProductionKwh = systemKwp * perKwp;

  const batteryKwh = MODEL.batteryKwh[backup];
  const usable = Math.min(annualProductionKwh * MODEL.selfUse[backup], monthlyKwh * 12 * 0.85);
  const annualSaving = usable * MODEL.tariffRPerKwh;

  const costLow =
    systemKwp * MODEL.costPerKwp.low + batteryKwh * MODEL.costPerKwhBattery.low;
  const costHigh =
    systemKwp * MODEL.costPerKwp.high + batteryKwh * MODEL.costPerKwhBattery.high;

  return {
    monthlyKwh: Math.round(monthlyKwh),
    systemKwp,
    panels: Math.ceil((systemKwp * 1000) / 450),
    batteryKwh,
    costLow: round(costLow, 5000),
    costHigh: round(costHigh, 5000),
    monthlySaving: round(annualSaving / 12, 50),
    annualSaving: round(annualSaving, 100),
    paybackLow: annualSaving > 0 ? Math.round((costLow / annualSaving) * 10) / 10 : 0,
    paybackHigh: annualSaving > 0 ? Math.round((costHigh / annualSaving) * 10) / 10 : 0,
    annualProductionKwh: Math.round(annualProductionKwh),
  };
}

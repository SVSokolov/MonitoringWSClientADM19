export class MemUsage {
  public freeMemMb : number = 0;
  public freeMemPercentage : number = 0;
  public totalMemMb : number = 0;
  public usedMemMb : number = 0;
}

export class HwUtilization {
  public cpuModel : string = '';
  public cpuCount: number = 0;
  public cpuUsage: number = 0;
  public memUsage: MemUsage = new MemUsage();
}

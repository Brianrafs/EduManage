export abstract class IMensseger {
  abstract success(mensseger: string): void;

  abstract error(mensseger: string): void;

  abstract info(mensseger: string): void;

  abstract alert(mensseger: string): void;

}

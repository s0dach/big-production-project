declare module "*.scss" {
    interface IClassNames {
        [className: string]: string
    }
    const ClassNames: IClassNames;
    export = ClassNames
}
declare let jQuery: (selector?: string) => any;
declare let $: (selector?: string) => any;

declare interface AxiosRequestConfig {
    get(arg: sting);
    then();
    catch();
}
declare let axios:AxiosRequestConfig;

interface VueArg{
    el: string;
    data: {
        [propName: sting]: any
    };
    methods: {
        [propName: sting]: any
    };
    mounted: ()=>any;
};

declare class Vue{
    constructor(arg: VueArg):any {};
};

declare class Swiper{
    slidePrev();
    slideNext();
    constructor(
        selector: string, 
        arg ?: {[propName: string]: any}):any{

        };
};
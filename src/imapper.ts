export interface IMapper {
    map<TOut, TIn>(source: TIn): TOut;
}
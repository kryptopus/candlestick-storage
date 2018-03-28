/* @flow */
import type Candlestick from "kryptopus-candlestick"

/**
 * Storage
 */
export interface StorageInterface
{
    /**
     * Save a candlestick
     *
     * @param   {string}        exchangeName    Exchange name
     * @param   {string}        baseAsset       Base asset
     * @param   {string}        quoteAsset      Quote asset
     * @param   {string}        interval        Interval
     * @param   {Candlestick}   candle          Candle
     */
    save(
        exchangeName:string,
        baseAsset:string,
        quoteAsset:string,
        interval:string,
        candle:Candlestick
    ):void | Promise<void>;

    /**
     * Get candles in period
     *
     * @param   {string}        exchangeName    Exchange name
     * @param   {string}        baseAsset       Base asset
     * @param   {string}        quoteAsset      Quote asset
     * @param   {string}        interval        Interval
     * @param   {number}        startTime       Start timestamp of the period
     * @param   {number}        endTime         End timestamp of the period
     * @return  {Candlestick[]}                 Candles
     */
    getInPeriod(
        exchangeName:string,
        baseAsset:string,
        quoteAsset:string,
        interval:string,
        startTime:number,
        endTime:number
    ):Array<Candlestick> | Promise<Array<Candlestick>>;
}

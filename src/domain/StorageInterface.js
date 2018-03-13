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
     * @param   {Candlestick}   candle      Candle
     */
    save(candle:Candlestick):void;

    /**
     * Get candles by interval
     *
     * @param   {number}        startTimestamp  Start timestamp
     * @param   {number}        endTimestamp    End timestamp
     * @return  {Candlestick[]}                 Candles
     */
    getByInterval(startTimestamp:number, endTimestamp:number):Array<Candlestick>;
}

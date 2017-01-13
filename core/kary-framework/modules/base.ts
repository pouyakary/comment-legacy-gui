
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace kary {

    //
    // ─── FOR KEY ────────────────────────────────────────────────────────────────────
    //

        /**
         * Repeats the function `func` for each of the elements in `object` object:
         * ```
         * kary.forEachKey({ a: 1, b: 2, c: 3}, key => {
         *     console.log( key )
         * })
         * ```
         * This code prints: `a`, `b` and `c`
         */
        export function forEachKey ( object: Object, func: ( key: string ) => void ) {
            Object.keys( object ).forEach( key => {
                func( key )
            })
        }

    //
    // ─── REPEAT ─────────────────────────────────────────────────────────────────────
    //

        export function repeat ( times: number, func: ( iterator: number ) => void ) {
            for ( let counter = 0; counter < times; counter++ )
                func( counter )
        }

    //
    // ─── RANGE ──────────────────────────────────────────────────────────────────────
    //

        /**
         * Creates a _range_ that between `start` and `end`. You can also specify
         * a step like:
         * ```
         * // returns [ 1, 2, 3 ]
         * kary.range( 1, 3 )
         *
         * // returns [ 4, 3, 2 ]
         * kary.range( 4, 2 )
         *
         * // returns [1, 1.5, 2, 2.5, 3]
         * kary.range(1, 3, 0.5)
         * ```
         */
        export function range ( start: number, end: number, step = 0 ) {
            step = Math.abs( step )
            if ( end < start )
                step = ( step === 0 )? -1 : -1 * step
            else
                step = ( step === 0)? 1 : step

            let result = new Array<number>(
                Math.floor( Math.abs( start - end ) / Math.abs( step ) ) + 1 )
            for ( let index = 0; index < result.length; index++ ) {
                result[ index ] = start + index * step
            }

            return result
        }

    // ────────────────────────────────────────────────────────────────────────────────

}
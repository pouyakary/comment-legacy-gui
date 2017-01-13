
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace kary.text {

    //
    // ─── REMOVE FROM START ──────────────────────────────────────────────────────────
    //

        export function removeFromStart ( host: string, removeable: string ): string {
            if ( host.startsWith( removeable ) )
                return host.substring[ removeable.length, host.length - 1 ]
            else
                return host
        }

    //
    // ─── REMOVE FROM END ────────────────────────────────────────────────────────────
    //

        export function removeFromEnd ( host: string, removeable: string ): string {
            if ( host.endsWith( removeable ) )
                return host.substring[ host.length - removeable.length ]
            else
                return host
        }

    //
    // ─── REPEAT ─────────────────────────────────────────────────────────────────────
    //

        export function repeatText ( text: string, times: number ) {
            let result = new Array<string>( )
            for ( let counter = 0; counter < times; counter++ )
                result.push( text )
            return result.join('')
        }

    // ────────────────────────────────────────────────────────────────────────────────

}
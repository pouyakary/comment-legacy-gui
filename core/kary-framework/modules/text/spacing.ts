
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
    // ─── PUT PADDING LEFT ───────────────────────────────────────────────────────────
    //

        export function padLeft ( text: string, size: number ) {
            if ( text.length < size ) {
                return repeatText( ' ', size - text.length ) + text
            } else {
                return text
            }
        }

    //
    // ─── PUT PADDING RIGHT ──────────────────────────────────────────────────────────
    //

        export function padRight ( text: string, size: number ) {
            if ( text.length < size ) {
                return text + repeatText( ' ', size - text.length )
            } else {
                return text
            }
        }

    // ────────────────────────────────────────────────────────────────────────────────

}
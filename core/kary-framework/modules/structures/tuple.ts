
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
    // ─── TUPLE ──────────────────────────────────────────────────────────────────────
    //

        export class Tuple<T, K> {

            //
            // ─── STORAGE ─────────────────────────────────────────────────────
            //

                public left: T
                public right: K

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( left: T, right: K ) {
                    this.left = left
                    this.right = right
                }

            //
            // ─── HAS ─────────────────────────────────────────────────────────
            //

                /** Checks something exists in the tuple. */
                public has ( data: T | K ) {
                    return this.left === data || this.right === data
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}

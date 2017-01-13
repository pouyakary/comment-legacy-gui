
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
    // ─── CONNECTION DATA STRUCTURE ──────────────────────────────────────────────────
    //

        /**
         * _Graph Connection Matrix_ to store the __connections__ 
         * of graph __nodes__.
         */
        export class DirectedGraph<T> {

            //
            // ─── STORAGE ─────────────────────────────────────────────────────
            //

                /** Graph Nodes */
                private nodes: Set<T>;

                /** Stores the __Pair Tuples__. */
                private pairs: Set<Tuple<T, T>>

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( nodes: Array<T> ) {
                    this.nodes = new Set( nodes )
                    this.pairs = new Set<Tuple<T, T>>( )
                }

            //
            // ─── ADD ─────────────────────────────────────────────────────────
            //

                /** Connects two __nodes__ to each other
                 * (_Only if they exists in the Graph_). */
                public connect ( left: T, right: T ) {
                    if ( !this.nodes.has( left ) || !this.nodes.has( right ) )
                        return false
                    this.pairs.add( new Tuple( left, right ) )
                    return true
                }

            //
            // ─── REMOVE ──────────────────────────────────────────────────────
            //

                /** Disconnects two __nodes__ from each other. */
                public disconnect ( left: T, right: T ) {
                    return this.pairs.delete( new Tuple( left, right ) )
                }

            //
            // ─── ARE CONNECTED ───────────────────────────────────────────────
            //

                /** Checks if two nodes are connected in a __directed__ manner. */
                public areConnect ( left: T, right: T ) {
                    return this.pairs.has( new Tuple( left, right ) )
                }

            //
            // ─── ADD NODE ────────────────────────────────────────────────────
            //

                /** Inserts a __node__ into the node lists. */
                public addNode ( node: T ) {
                    this.nodes.add( node )
                }

            //
            // ─── REMOVE NODE ─────────────────────────────────────────────────
            //

                /** Removes a __node__ and all of it's __connections__. */
                public removeNode ( node: T ) {
                    if ( !this.nodes.has( node ) ) return false
                    for ( let pair of this.pairs )
                        if ( pair.has( node ) )
                            this.pairs.delete( pair )
                    return this.nodes.delete( node )
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}
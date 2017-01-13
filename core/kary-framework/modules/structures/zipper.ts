
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
    // ─── ZIPPER CLASS ───────────────────────────────────────────────────────────────
    //

        /** A _Set_ that has one __active__ element */
        export class Zipper<T> extends Set {

            //
            // ─── EXTRA STORAGE ───────────────────────────────────────────────
            //

                /** The focused element */
                private focusedElement: T;

                /** A list of functions to call when focus changes. */
                private changeFocusEventFunctions: Set<( focused: T ) => void>;

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( initElement: T ) {
                    super( );
                    this.add( initElement );
                    this.changeFocusEventFunctions = new Set( );
                    this.focusedElement = initElement;
                }

            //
            // ─── REMOVE ELEMENT ──────────────────────────────────────────────
            //

                /** Removes an __element__ from the zipper. */
                public remove ( element: T ): boolean {
                    // we don't remove element if the set is going te be empty....
                    if ( this.values.length < 2 ) return false;

                    // if the active index is the index we want
                    // to delete we have to change it.
                    if ( this.focusedElement === element ) {
                        // finding the active index
                        let activeIndex = 0, index = 0;
                        this.forEach( el => {
                            if ( el === element ) {
                                activeIndex = index;
                                return;
                            }})

                        // checking what to do:
                        if ( activeIndex > 0 ) {
                            this.focus( this.values[ activeIndex - 1 ] );
                        }

                        else if ( activeIndex < this.values.length ) {
                            this.focus( this.values[ activeIndex + 1 ] );
                        }
                    }

                    // super
                    return this.delete( element );
                }

            //
            // ─── SET ACTIVE INDEX ────────────────────────────────────────────
            //

                /**
                 * Sets one of the __elements__ that _already exists in the
                 * zipper_ as the new active element.
                 */
                public focus ( element ) {
                    if ( this.has( element ) ) {
                        this.focusedElement = element;
                        this.applyFocusChangeEvents( );
                        return true;
                    } else {
                        return false;
                    }
                }

            //
            // ─── GET FOCUSED ELEMENT ─────────────────────────────────────────
            //

                /** Returns the __focused element__ */
                public getFocused ( ) {
                    return this.focusedElement;
                }

            //
            // ─── EVENTS ──────────────────────────────────────────────────────
            //

                /**
                 * Adds a _function_ that takes the __newly focused element__ 
                 * and calls it _every time the focus changes_
                 */
                public addFocusChangeFunction ( changeFunc: ( activeElement: T ) => void ) {
                    this.changeFocusEventFunctions.add( changeFunc );
                }

                /** Removes a function from the __focus change event list__ */
                public removeFocusChangeFunction ( changeFunc: ( activeElement: T ) => void ) {
                    this.changeFocusEventFunctions.delete( changeFunc );
                }

                private applyFocusChangeEvents ( ) {
                    for ( let eventFunction of this.changeFocusEventFunctions ) {
                        eventFunction( this.focusedElement );
                    }
                }

            // ─────────────────────────────────────────────────────────────────

        }

    // ────────────────────────────────────────────────────────────────────────────────

}
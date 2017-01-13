
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//

namespace kary.processes {

    //
    // ─── KARY THREAD ────────────────────────────────────────────────────────────────
    //

        /**
         * This class let's you have a multi process software.
         * ___
         * __Process Script__
         *
         * As it's based on _WebWorkers_, you should provide a separate web worker script
         * containing the script you would like to execute. This is the template for the scripts:
         * ```
         * onmessage = arg => {
         *    postMessage(`Hello, ${ arg }!`)
         * }
         * ```
         * This is the main structure you have in your worker. You should compare it to:
         * ```
         * function main ( arg ) {
         *    return `Hello, ${ arg }!`
         * }
         * ```
         * ___
         * __Using the Process__
         *
         * To use the process you first need to load the process file like this:
         * ```
         * let process = new kary.Process('path-to-process-file.js')
         * ```
         * Then to use it you can treat the process file as a function like this:
         * ```
         * // result would be: 'Hello, Kary!'
         * let result = await process.exec('Kary')
         * ```
         * ___
         * __Going multi thread:__
         *
         * You can run many processes asynchronously as:
         * ```
         * // 10 process will run in parallel here
         * process.massRun( 10 )
         * ```
         * And you can terminate all these processes using:
         * ```
         * process.terminateAll( )
         * ```
         */

        export class Process {

            //
            // ─── STORAGE ─────────────────────────────────────────────────────
            //

                private workerURI: string

                private workers: Set<Worker>

            //
            // ─── CONSTRUCTOR ─────────────────────────────────────────────────
            //

                constructor ( URI: string ) {
                    this.workerURI = URI
                }

            //
            // ─── RUN ─────────────────────────────────────────────────────────
            //

                /**
                 * Runs the process with the given argument.
                 */
                public async exec ( arg? ) {
                    return new Promise<any> ( ( resolve, reject ) => {
                        // making the worker
                        let worker = new Worker( this.workerURI );
                        this.workers.add( worker )

                        // running the process
                        worker.postMessage( arg || null )

                        // on case of errors
                        worker.onerror = error => reject( error )

                        // if got going successfully
                        worker.onmessage = returnValue => resolve( returnValue )
                    })
                }

            //
            // ─── TERMINATE ALL ───────────────────────────────────────────────
            //

                /** Terminates all the running processes */
                terminateAll ( ) {
                    this.workers.forEach( worker => worker.terminate )
                }

            //
            // ─── RUN MANY ────────────────────────────────────────────────────
            //

                /**
                 * Rus the process as the much as specified with an optional argument:
                 * ```
                 * // runs the process 10 times with arg: 'hello'
                 * process.massRun( 10, 'hell' )
                 * ```
                 */
                async massRun ( countOfProcesses: number, arg? ) {
                    for ( let counter = 0; counter < countOfProcesses; counter ++ )
                        this.exec( arg || null )
                }

            // ─────────────────────────────────────────────────────────────────

        }

    //
    // ─── DELAY ──────────────────────────────────────────────────────────────────────
    //

        /**
         * This function makes your code __sleep__ for a given time in _milliseconds_.
         * You can use it as: (Remember to use the `async` / `await` features to make
         * it work right)
         * ```
         * async function yourFunction ( ) {
         *     await kary.delay( time );
         * }
         * ```
         */
        export async function delay ( delayTime: number ) {
            return new Promise<void>( resolve => {
                setTimeout( resolve, delayTime )
            })
        }

    // ────────────────────────────────────────────────────────────────────────────────

}
// Type definitions for Apache Cordova Zip plugin.
// Project: https://github.com/MobileChromeApps/cordova-plugin-zip
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface Zip {
    /**
     * Unzips the file to the given path
     * @param fileName Absolute path to the file to unzip
     * @param outputDirectory Folder to place the content
     * @param callback Called with status code on fail or success
     * @param progressCallback T
     */
    unzip(fileName: string, outputDirectory: string, callback: (status: number) => void,
          progressCallback?: (event : any) => void): void
}

declare var Zip: {
    new (): Zip;
};
/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { Static, Type } from "@sinclair/typebox";
import { Format } from "../schema-index";

export const EncodedSchemaChange = Type.Object({
	new: Format,
	old: Format,
});

export type EncodedSchemaChange = Static<typeof EncodedSchemaChange>;

/* eslint-disable max-len */
import type { AddressMudRecord, AddressMudRecords, AddressMudRecordsItem, AddressMudTables } from 'types/api/address';
import type { MudWorldSchema, MudWorldTable } from 'types/api/mudWorlds';

export const table1: MudWorldTable = {
  table_full_name: 'tb.store.Tables',
  table_id: '0x746273746f72650000000000000000005461626c657300000000000000000000',
  table_name: 'Tables',
  table_namespace: 'store',
  table_type: 'onchain',
};

export const table2: MudWorldTable = {
  table_full_name: 'ot.world.FunctionSignatur',
  table_id: '0x6f74776f726c6400000000000000000046756e6374696f6e5369676e61747572',
  table_name: 'FunctionSignatur',
  table_namespace: 'world',
  table_type: 'offchain',
};

export const schema1: MudWorldSchema = {
  key_names: [ 'moduleAddress', 'argumentsHash' ],
  key_types: [ 'address', 'bytes32' ],
  value_names: [ 'fieldLayout', 'keySchema', 'valueSchema', 'abiEncodedKeyNames', 'abiEncodedFieldNames' ],
  value_types: [ 'bytes32', 'bytes32', 'bytes32', 'bytes', 'bytes' ],
};

export const schema2: MudWorldSchema = {
  key_names: [],
  key_types: [],
  value_names: [ 'value' ],
  value_types: [ 'address' ],
};

export const mudTables: AddressMudTables = {
  items: [
    {
      table: table1,
      schema: schema1,
    },
    {
      table: table2,
      schema: schema2,
    },
  ],
  next_page_params: {
    items_count: 50,
    table_id: '1',
  },
};

const record: AddressMudRecordsItem = {
  decoded: {
    abiEncodedFieldNames: '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000006706c617965720000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000576616c7565000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000974696d657374616d700000000000000000000000000000000000000000000000',
    abiEncodedKeyNames: '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000026964000000000000000000000000000000000000000000000000000000000000',
    goldCosts: [ '100000', '150000', '200000', '250000', '400000', '550000', '700000' ],
    prototypeIds: [
      '0x53776f7264736d616e0000000000000000000000000000000000000000000000',
      '0x50696b656d616e00000000000000000000000000000000000000000000000000',
      '0x50696b656d616e00000000000000000000000000000000000000000000000000',
      '0x4172636865720000000000000000000000000000000000000000000000000000',
      '0x4b6e696768740000000000000000000000000000000000000000000000000000',
    ],
    keySchema: '0x002001001f000000000000000000000000000000000000000000000000000000',
    tableId: '0x6f74000000000000000000000000000044726177557064617465000000000000',
    valueSchema: '0x00540300611f1f00000000000000000000000000000000000000000000000000',
  },
  id: '0x007a651a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007',
  is_deleted: false,
  timestamp: '2024-05-09T15:14:32.000000Z',
};

export const mudRecords: AddressMudRecords = {
  items: [ record, record ],
  next_page_params: {
    items_count: 50,
    key0: '1',
    key1: '2',
    key_bytes: '3',
  },
  schema: {
    key_names: [ 'tableId' ],
    key_types: [ 'bytes32' ],
    value_names: [ 'prototypeIds', 'goldCosts', 'keySchema', 'valueSchema', 'abiEncodedKeyNames', 'abiEncodedFieldNames' ],
    value_types: [ 'bytes32[]', 'int32[]', 'bytes32', 'bytes32', 'bytes32', 'bytes', 'bytes' ],
  },
  table: table1,
};

export const mudRecord: AddressMudRecord = {
  record,
  schema: mudRecords.schema,
  table: table1,
};
fluent-iterable - v0.1.0

# fluent-iterable - v0.1.0

## Table of contents

### Variables

- [MetaClass](README.md#metaclass)
- [MetaCtorParam](README.md#metactorparam)
- [MetaMethod](README.md#metamethod)
- [MetaParam](README.md#metaparam)
- [MetaProperty](README.md#metaproperty)
- [exceptionMap](README.md#exceptionmap)

### Functions

- [applyMetaClass](README.md#applymetaclass)
- [applyMetaCtorParam](README.md#applymetactorparam)
- [applyMetaMethod](README.md#applymetamethod)
- [applyMetaParam](README.md#applymetaparam)
- [applyMetaProperty](README.md#applymetaproperty)
- [prepareMetaClass](README.md#preparemetaclass)
- [prepareMetaCtorParam](README.md#preparemetactorparam)
- [prepareMetaMethod](README.md#preparemetamethod)
- [prepareMetaParam](README.md#preparemetaparam)
- [prepareMetaProperty](README.md#preparemetaproperty)

## Variables

### MetaClass

• `Const` **MetaClass**: *IterableClassDecorator*<[]\>

___

### MetaCtorParam

• `Const` **MetaCtorParam**: *IterableParameterDecorator*<[identifier?: unknown]\>

___

### MetaMethod

• `Const` **MetaMethod**: *IterableMethodDecorator*<[]\>

___

### MetaParam

• `Const` **MetaParam**: *IterableParameterDecorator*<[identifier?: unknown]\>

___

### MetaProperty

• `Const` **MetaProperty**: *IterablePropertyDecorator*<[]\>

___

### exceptionMap

• `Const` **exceptionMap**: *Map*<Object, Map<string \| number \| symbol, MethodDecorator[]\>\>

## Functions

### applyMetaClass

▸ **applyMetaClass**(`defaultDecorator?`: () => ClassDecorator): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `defaultDecorator?` | () => ClassDecorator |

**Returns:** *void*

___

### applyMetaCtorParam

▸ **applyMetaCtorParam**(`defaultDecorator?`: (`identifier?`: *any*) => ParameterDecorator): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `defaultDecorator?` | (`identifier?`: *any*) => ParameterDecorator |

**Returns:** *void*

___

### applyMetaMethod

▸ **applyMetaMethod**(`defaultDecorator?`: () => MethodDecorator): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `defaultDecorator?` | () => MethodDecorator |

**Returns:** *void*

___

### applyMetaParam

▸ **applyMetaParam**(`defaultDecorator?`: () => ParameterDecorator): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `defaultDecorator?` | () => ParameterDecorator |

**Returns:** *void*

___

### applyMetaProperty

▸ **applyMetaProperty**(`defaultDecorator?`: () => PropertyDecorator): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `defaultDecorator?` | () => PropertyDecorator |

**Returns:** *void*

___

### prepareMetaClass

▸ **prepareMetaClass**<T\>(`cls`: *AbstractClass*<T\>, `decorator`: ClassDecorator): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `cls` | *AbstractClass*<T\> |
| `decorator` | ClassDecorator |

**Returns:** *void*

___

### prepareMetaCtorParam

▸ **prepareMetaCtorParam**<T\>(`cls`: *AbstractClass*<T\>, `indexOrDecoratedSymbol`: *unknown*, `decorator`: ParameterDecorator): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `cls` | *AbstractClass*<T\> |
| `indexOrDecoratedSymbol` | *unknown* |
| `decorator` | ParameterDecorator |

**Returns:** *void*

___

### prepareMetaMethod

▸ **prepareMetaMethod**<T\>(`cls`: *AbstractClass*<T\>, `methodName`: *KeysOfType*<T, Func\>, `decorator`: MethodDecorator): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `cls` | *AbstractClass*<T\> |
| `methodName` | *KeysOfType*<T, Func\> |
| `decorator` | MethodDecorator |

**Returns:** *void*

___

### prepareMetaParam

▸ **prepareMetaParam**<T\>(`cls`: *AbstractClass*<T\>, `indexOrDecoratedSymbol`: *unknown*, `decorator`: ParameterDecorator): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `cls` | *AbstractClass*<T\> |
| `indexOrDecoratedSymbol` | *unknown* |
| `decorator` | ParameterDecorator |

**Returns:** *void*

___

### prepareMetaProperty

▸ **prepareMetaProperty**<T\>(`cls`: *AbstractClass*<T\>, `propertyName`: keyof T, `decorator`: PropertyDecorator): *void*

#### Type parameters:

| Name |
| :------ |
| `T` |

#### Parameters:

| Name | Type |
| :------ | :------ |
| `cls` | *AbstractClass*<T\> |
| `propertyName` | keyof T |
| `decorator` | PropertyDecorator |

**Returns:** *void*

fluent-iterable - v0.0.1

# fluent-iterable - v0.0.1

## Table of contents

### Variables

- [MetaClass](README.md#metaclass)
- [MetaCtorParam](README.md#metactorparam)
- [MetaMethod](README.md#metamethod)
- [MetaParam](README.md#metaparam)
- [MetaProperty](README.md#metaproperty)

### Functions

- [applyMetaClass](README.md#applymetaclass)
- [applyMetaCtorParam](README.md#applymetactorparam)
- [applyMetaMethod](README.md#applymetamethod)
- [applyMetaParam](README.md#applymetaparam)
- [applyMetaProperty](README.md#applymetaproperty)

## Variables

### MetaClass

• `Const` **MetaClass**: *IterableClassDecorator*<[]\>

___

### MetaCtorParam

• `Const` **MetaCtorParam**: *IterableParameterDecorator*<[identifier: unknown]\>

___

### MetaMethod

• `Const` **MetaMethod**: *IterableMethodDecorator*<[]\>

___

### MetaParam

• `Const` **MetaParam**: *IterableParameterDecorator*<[identifier: unknown]\>

___

### MetaProperty

• `Const` **MetaProperty**: *IterablePropertyDecorator*<[]\>

## Functions

### applyMetaClass

▸ **applyMetaClass**(`defaultDecorator`: () => ClassDecorator \| *undefined*, ...`exceptions`: [AbstractClass, ClassDecorator[]][]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`defaultDecorator` | () => ClassDecorator \| *undefined* |
`...exceptions` | [AbstractClass, ClassDecorator[]][] |

**Returns:** *void*

___

### applyMetaCtorParam

▸ **applyMetaCtorParam**(`defaultDecorator`: () => ParameterDecorator \| *undefined*, ...`exceptions`: [AbstractClass, [*number*, ParameterDecorator[]][]][]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`defaultDecorator` | () => ParameterDecorator \| *undefined* |
`...exceptions` | [AbstractClass, [*number*, ParameterDecorator[]][]][] |

**Returns:** *void*

___

### applyMetaMethod

▸ **applyMetaMethod**(`defaultDecorator`: () => MethodDecorator \| *undefined*, ...`exceptions`: [AbstractClass, [*string*, MethodDecorator[]][]][]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`defaultDecorator` | () => MethodDecorator \| *undefined* |
`...exceptions` | [AbstractClass, [*string*, MethodDecorator[]][]][] |

**Returns:** *void*

___

### applyMetaParam

▸ **applyMetaParam**(`defaultDecorator`: () => ParameterDecorator \| *undefined*, ...`exceptions`: [AbstractClass, [*number*, ParameterDecorator[]][]][]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`defaultDecorator` | () => ParameterDecorator \| *undefined* |
`...exceptions` | [AbstractClass, [*number*, ParameterDecorator[]][]][] |

**Returns:** *void*

___

### applyMetaProperty

▸ **applyMetaProperty**(`defaultDecorator`: () => PropertyDecorator \| *undefined*, ...`exceptions`: [AbstractClass, [*string*, PropertyDecorator[]][]][]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`defaultDecorator` | () => PropertyDecorator \| *undefined* |
`...exceptions` | [AbstractClass, [*string*, PropertyDecorator[]][]][] |

**Returns:** *void*

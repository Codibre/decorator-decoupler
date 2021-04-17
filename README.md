[![Actions Status](https://github.com/Codibre/decorator-decoupler/workflows/build/badge.svg)](https://github.com/Codibre/decorator-decoupler/actions)
[![Actions Status](https://github.com/Codibre/decorator-decoupler/workflows/test/badge.svg)](https://github.com/Codibre/decorator-decoupler/actions)
[![Actions Status](https://github.com/Codibre/decorator-decoupler/workflows/lint/badge.svg)](https://github.com/Codibre/decorator-decoupler/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/decorator-decoupler/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/decorator-decoupler/maintainability)
[![Packages](https://david-dm.org/Codibre/decorator-decoupler.svg)](https://david-dm.org/Codibre/decorator-decoupler)
[![npm version](https://badge.fury.io/js/decorator-decoupler.svg)](https://badge.fury.io/js/decorator-decoupler)

**Work in progress**

Use decorator-based frameworks without polluting your core

## How to Install

```
npm i decorator-decoupler
```

## How to use it
Marks your class, parameters and methods of interest with the proper decorator:

```ts
@MetaClass()
export class MyClass {
  constructor(@MetaCtorParam(MyParamSymbol) param: string) {
    ...
  }

  @MetaMethod()
  myMethod(
    @MetaParam(MyOtherParamSymbol) param: number,
  ): void {
    ...
  }
}
```

Then, apply the decorator of the framework of your choice at the beginning of you app!

```ts
import { applyMetaClass } from 'decorator-decoupler';
import { Injectable, Inject } from '@nestjs/core';

applyMetaClass(Injectable);
applyMetaCtorParam(Inject);
```

## But why?

The idea here is to totally isolate your core code, where your main structure and business rule is, from infrastructure details.
In the example above, nestjs is a great framework but is an infrastructure library. If you want to change the controller scheme of your
application, you need to remove nestjs decorators from your core code, and probably change some decorator applying logic, not only
replacing it.
With **decorator-decoupler**, you can concentrate all that logic in the entrypoint or infrastructure layer, making the transition between different frameworks a lot easier.

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).

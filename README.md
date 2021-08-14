<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# boxcoxinv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the inverse of a one-parameter [Box-Cox transformation][box-cox-transformation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

To compute the inverse of a one-parameter [Box-Cox transformation][box-cox-transformation], one finds the `x` such that 

<!-- <equation class="equation" label="eq:inverse_boxcox_transformation_one_parameter" align="center" raw="y = \begin{cases}\frac{x^{\lambda} - 1}{\lambda} & \textrm{if}\ \lambda \neq 0 \\ \ln(x) & \textrm{if}\ \lambda = 0 \end{cases}" alt="Inverse One-Parameter Box-Cox Transformation"> -->

<div class="equation" align="center" data-raw-text="y = \begin{cases}\frac{x^{\lambda} - 1}{\lambda} & \textrm{if}\ \lambda \neq 0 \\ \ln(x) & \textrm{if}\ \lambda = 0 \end{cases}" data-equation="eq:inverse_boxcox_transformation_one_parameter">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@1f2eca12bb7f86547d4b5b335364419bac5b97fb/lib/node_modules/@stdlib/math/base/special/boxcoxinv/docs/img/equation_inverse_boxcox_transformation_one_parameter.svg" alt="Inverse One-Parameter Box-Cox Transformation" />
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-boxcoxinv
```

</section>

<section class="usage">

## Usage

```javascript
var boxcoxinv = require( '@stdlib/math-base-special-boxcoxinv' );
```

#### boxcoxinv( y, lambda )

Computes the inverse of a one-parameter [Box-Cox transformation][box-cox-transformation].

```javascript
var v = boxcoxinv( 1.0, 2.5 );
// returns ~1.6505

v = boxcoxinv( 4.0, 2.5 );
// returns ~2.6095

v = boxcoxinv( 10.0, 2.5 );
// returns ~3.6812

v = boxcoxinv( 2.0, 0.0 );
// returns ~7.3891

v = boxcoxinv( -1.0, 2.5 );
// returns NaN

v = boxcoxinv( 0.0, -1.0 );
// returns 1.0

v = boxcoxinv( 1.0, NaN );
// returns NaN

v = boxcoxinv( NaN, 3.1 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array-incrspace' );
var boxcoxinv = require( '@stdlib/math-base-special-boxcoxinv' );

var y = incrspace( -1.0, 10.0, 1.0 );
var l = incrspace( -0.5, 5.0, 0.5 );
var b;
var i;
var j;

for ( i = 0; i < y.length; i++ ) {
    for ( j = 0; j < l.length; j++ ) {
        b = boxcoxinv( y[ i ], l[ j ] );
        console.log( 'boxcoxinv(%d, %d) = %d', y[ i ], l[ j ], b );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

## References

-   Box, G. E. P., and D. R. Cox. 1964. "An Analysis of Transformations." _Journal of the Royal Statistical Society. Series B (Methodological)_ 26 (2). \[Royal Statistical Society, Wiley]: 211–52. <http://www.jstor.org/stable/2984418>.

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-boxcoxinv.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-boxcoxinv

[test-image]: https://github.com/stdlib-js/math-base-special-boxcoxinv/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-boxcoxinv/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-boxcoxinv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-boxcoxinv?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-boxcoxinv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-boxcoxinv/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-boxcoxinv/main/LICENSE

[box-cox-transformation]: https://en.wikipedia.org/wiki/Power_transform#Box-Cox_transformation

</section>

<!-- /.links -->

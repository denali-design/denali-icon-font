# Denali Icon Font

[![npm](https://img.shields.io/npm/v/denali-icon-font?color=red)](https://www.npmjs.com/package/denali-icon-font)
[![Build Status][status-image]][status-url]
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/denali-design/denali-icon-font)
![slack](https://img.shields.io/badge/slack-Denali-3570f4.svg?cacheSeconds=2592000)
[![GitHub](https://img.shields.io/github/license/denali-design/denali-css)](https://github.com/denali-design/denali-css/blob/master/LICENSE.md)

## Table of contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [Versioning](#versioning)
- [Contribute](#contribute)
- [License](#license)

---

## Background

The Denali Icon Font was created specifically to service engineering and data based products. The icon family covers a wide variety of topics including localization, security authorization, and data visualization. While the family is ideal for use with engineering and data products, it also includes generic icons that can be utilized by any product such as UI controls and navigation. For flexibility, all icons in the family are available in solid and outline styles and can be implemented as png, svg, or font.

To view the icon family visit our icon [site](https://denali.design/denali-icon-font/docs/).

## Install

#### Prerequisites

You will need the following installed to run the site:

1. [Gulp](https://gulpjs.com/)
2. [NPM](https://www.npmjs.com/)

> Note: This guide assumes you have the prerequisites installed locally and will not go over install instructions for them. Refer to their websites for guidance if necessary.

#### Generating Icon Font

After all prerequisites are installed follow these instructions to run a local version of this repository.

Clone or download this repository:

```
denali-system-language/denali-icons.git
```

Use terminal or any command line tool and navigate to where you downloaded the repository.

```
cd user/documents/git/denali-icon-font
```

Use NPM to install packages.

```
npm install
```

#### Usage

If icons were added use this to build a new icon font navigate to where you downloaded the repository and run this gulp command.

```
gulp iconfont
```

You should be prompted with a success message. New files are now available in the dist folder.

## Browser Support

- **Chrome** on Android, Windows, macOS, and Linux
- **Firefox** on Windows, macOS, and Linux
- **Safari** on iOS and macOS

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this [repository](https://github.com/denali-design/denali-icon-font/tags).

## Contribute

To start contributing to Denali, have a look at our guidelines, as well as pointers on where to start making changes, in our [contributing guide](CONTRIBUTE.md).

## Maintainers

- **Jay Torres** | _Dir Product Design for Core Platforms_ (torresr@verizonmedia.com)
- **Chris Esler** | _Principle Software Dev Engineer_ (cesler@verizonmedia.com)
- **Chas Turansky** | _Product Designer & Front-End Dev_ (cturansky@verizonmedia.com)
- **Jazmin Orozco** | _Product Designer_ (jorozco@verizonmedia.com)
- **Marco Sandoval** | _Product Designer_ (msandoval@verizonmedia.com)

## License

Code licensed under the SIL Open Font license. See [LICENSE file](LICENESE.md) for terms.

[npm-image]: https://img.shields.io/npm/v/denali-icon-font.svg
[npm-url]: https://npmjs.org/package/denali-icon-font
[status-image]: https://cd.screwdriver.cd/pipelines/3068/badge
[status-url]: https://cd.screwdriver.cd/pipelines/3068

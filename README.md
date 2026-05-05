# @summitstreet/sst-ts-core

Core TypeScript SDK — a zero-dependency utility library for TypeScript-based applications. Provides utilities for identifier string manipulation.

## Requirements

- Node.js 24.x

## Installation

This package is published to the GitHub Package Registry. Consumers must configure npm to resolve the `@summitstreet` scope from GitHub before installing.

**1. Add a `.npmrc` file to the consuming project:**

```
@summitstreet:registry=https://npm.pkg.github.com
```

**2. Authenticate with GitHub Packages** (required for private packages):

```
npm login --scope=@summitstreet --registry=https://npm.pkg.github.com
```

**3. Install the package:**

```
npm install @summitstreet/sst-ts-core
```

## Development

### Prerequisites

Node.js 24.x and npm are required.

```
npm install
```

### Build

```
npm run build
```

Output is written to `dist/`. The build runs pre- and post-build hooks defined in `scripts/pre-build.ts` and `scripts/post-build.ts`.

### Test

```
npm test
```

### Lint

```
npm run lint
```

### Format

```
npm run format
```

---

## License

MIT — see [LICENSE](LICENSE) for details.

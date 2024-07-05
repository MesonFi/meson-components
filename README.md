## Local test:

```
cd meson-components
npm run build
npm link

cd /your-project
npm link meson-components
```

## Usage:

## create .d.ts in your project

```
declare module 'meson-components' {
  export * from 'meson-components/dist/@types/index';
}
```

```
import { Button } from 'meson-component
...
<Button>meson-button</Button>
```

### use default theme style

```
import 'meson-components/dist/style.css';
```

### use custom less variables:
in root:
```
import 'meson-components/dist/index.less';
```

in webpack.config.js

```
{
  test: /\.less$/i,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          modifyVars: {
            'button-primary-color': '#1DA57A',
          },
        },
      },
    },
  ],
}

```

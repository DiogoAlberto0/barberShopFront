import type { Config } from "tailwindcss";
import daisyui from 'daisyui'
import tailwintTypography from "@tailwindcss/typography"

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            screens: {
                '855px': '855px'
            }
        },
    },
    plugins: [
        daisyui,
        tailwintTypography
    ],
    daisyui: {
        themes: ['forest', 'corporate'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
    safelist: [
        'btn-primary',
        'btn-secondary',
        'btn-neutral',
        'btn-accent',
        'btn-ghost',
        'btn-link',
        'btn-error',
        'btn-default',
        'input-primary',
        'input-secondary',
        'input-neutral',
        'input-accent',
        'input-ghost',
        'input-link',
        'input-error',
        'input-default',
        'textarea-primary',
        'textarea-secondary',
        'textarea-neutral',
        'textarea-accent',
        'textarea-ghost',
        'textarea-link',
        'textarea-error',
        'textarea-default',
        'divider-primary',
        'divider-secondary',
        'divider-neutral',
        'divider-accent',
        'divider-ghost',
        'divider-link',
        'divider-error',
        'divider-default',
        'bg-primary',
        'bg-secondary',
        'bg-neutral',
        'bg-accent',
        'bg-ghost',
        'bg-link',
        'bg-error',
        'bg-default',
        'text-primary',
        'text-secondary',
        'text-neutral',
        'text-accent',
        'text-ghost',
        'text-link',
        'text-error',
        'text-default',
        'text-alert',
        'text-success',
    ]

} satisfies Config;

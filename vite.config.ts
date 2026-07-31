import babel from "@rolldown/plugin-babel";
import { reactCompilerPreset } from "@vitejs/plugin-react";
import vinext from "vinext";
import { defineConfig } from "vite";
import type { Logger } from "babel-plugin-react-compiler";

export default defineConfig({
  plugins: [
    vinext(),
    babel({
      presets: [
        reactCompilerPreset({
          logger: {
            logEvent(filename, event) {
              switch (event.kind) {
                case "CompileSuccess": {
                  console.log(`✅ Compiled: ${filename}`);
                  break;
                }
                case "CompileError": {
                  console.log(`❌ Compiler Error: ${filename}`);
                  console.error(`Reason: ${event.detail.reason}`);
                  break;
                }
                default: {
                  break; // eslint fix
                }
              }
            },
          } satisfies Logger,
        }),
      ],
    }),
  ],
});

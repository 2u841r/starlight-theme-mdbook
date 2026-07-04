import type { HookParameters } from '@astrojs/starlight/types';
import type { AstroIntegrationLogger } from 'astro';

export function overrideComponents(
	starlightConfig: StarlightUserConfig,
	overrides: ComponentOverride[],
	logger: AstroIntegrationLogger
): StarlightUserConfig['components'] {
	const components = { ...starlightConfig.components };
	for (const override of overrides) {
		if (starlightConfig.components?.[override]) {
			const fallback = `starlight-theme-mdbook/overrides/${override}.astro`;

			logger.warn(`A \`<${override}>\` component override is already defined in your Starlight configuration.`);
			logger.warn(
				`To use \`starlight-theme-mdbook\`, either remove this override or manually render the content from \`${fallback}\`.`
			);
			continue;
		}
		components[override] = `starlight-theme-mdbook/overrides/${override}.astro`;
	}

	return components;
}

type StarlightUserConfig = HookParameters<'config:setup'>['config'];
type ComponentOverride = keyof NonNullable<StarlightUserConfig['components']>;

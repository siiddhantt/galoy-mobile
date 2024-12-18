// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

const localeTranslationLoaders = {
	af: () => import('./af'),
	ar: () => import('./ar'),
	ca: () => import('./ca'),
	cs: () => import('./cs'),
	da: () => import('./da'),
	de: () => import('./de'),
	el: () => import('./el'),
	en: () => import('./en'),
	es: () => import('./es'),
	fr: () => import('./fr'),
	hr: () => import('./hr'),
	hu: () => import('./hu'),
	hy: () => import('./hy'),
	it: () => import('./it'),
	ja: () => import('./ja'),
	lg: () => import('./lg'),
	ms: () => import('./ms'),
	nl: () => import('./nl'),
	pt: () => import('./pt'),
	qu: () => import('./qu'),
	ro: () => import('./ro'),
	sk: () => import('./sk'),
	sr: () => import('./sr'),
	sw: () => import('./sw'),
	th: () => import('./th'),
	tr: () => import('./tr'),
	vi: () => import('./vi'),
}

const updateDictionary = (locale: Locales, dictionary: Partial<Translations>): Translations =>
	loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary }

export const importLocaleAsync = async (locale: Locales): Promise<Translations> =>
	(await localeTranslationLoaders[locale]()).default as unknown as Translations

export const loadLocaleAsync = async (locale: Locales): Promise<void> => {
	updateDictionary(locale, await importLocaleAsync(locale))
	loadFormatters(locale)
}

export const loadAllLocalesAsync = (): Promise<void[]> => Promise.all(locales.map(loadLocaleAsync))

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))

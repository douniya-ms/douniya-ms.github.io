import { useState, useEffect } from "react";
import { getLocale, locales, setLocale } from "#/paraglide/runtime";
import { m } from "#/paraglide/messages";

export function LocaleSwitcher() {
    const currentLocale = getLocale();
    
    const [activeLocale, setActiveLocale] = useState(currentLocale);

    useEffect(() => {
        setActiveLocale(currentLocale);
    }, [currentLocale]);

    const currentIndex = locales.indexOf(activeLocale);

    // Fix: Dynamically type `locale` as the exact union of your supported languages
    const handleSelect = (locale: (typeof locales)[number]) => {
        setActiveLocale(locale); 
        setLocale(locale);       
    };

    return (
        <div className="locale-switcher" role="group" aria-label={m.language_label()}>
            <div className="locale-switcher__options">
                <div
                    className="absolute inset-y-[0.2rem] -z-10 rounded-full bg-marine transition-all duration-300 ease-out"
                    style={{
                        width: `calc((100% - 0.4rem - ${(locales.length - 1) * 0.125}rem) / ${locales.length})`,
                        left: `calc(0.2rem + ${currentIndex} * (calc((100% - 0.4rem - ${(locales.length - 1) * 0.125}rem) / ${locales.length}) + 0.125rem))`
                    }}
                />
                
                {locales.map((locale) => (
                    <button
                        key={locale}
                        // TypeScript now knows `locale` is strictly one of your array values
                        onClick={() => handleSelect(locale as (typeof locales)[number])}
                        aria-pressed={locale === activeLocale}
                        type="button"
                        className="locale-switcher__option"
                    >
                        {locale.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
}
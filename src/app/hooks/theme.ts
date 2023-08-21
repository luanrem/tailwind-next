import { atom, useAtom } from "jotai";


const defaultTheme = atom<'dark' | ''>('dark')

export const useSelectTheme = () => {
  const [theme, setTheme] = useAtom(defaultTheme);

  const handleChangeTheme = () => setTheme(theme === 'dark' ? '' : 'dark')

  return { theme, handleChangeTheme }
}
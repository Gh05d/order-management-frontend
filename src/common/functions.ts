export const debounce = <T extends (...args: any[]) => ReturnType<T>>(
  callback: T,
  timeout: number = 400
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

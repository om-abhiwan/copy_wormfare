export const vibrate = () => {
  const navigatorVibrate =
    navigator.vibrate ||
    navigator.webkitVibrate ||
    navigator.mozVibrate ||
    navigator.msVibrate;

  if (navigatorVibrate) {
    navigatorVibrate.call(navigator, [105]);
  } else {
    window.Telegram?.WebApp?.HapticFeedback.impactOccurred('light');
  }
};

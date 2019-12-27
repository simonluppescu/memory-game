class TimeService {
  static convertToTime(seconds: number): string {
    const addPadding = (num: number): string => (num <= 9 ? `0${num}` : num.toString());

    const minutes = Math.floor(seconds / 60);
    const remainingSecs = seconds % 60;

    return `${addPadding(minutes)}:${addPadding(remainingSecs)}`;
  }
}

export default TimeService;

function whoIsPaying(name) {
    if (name.length > 2) return [name, name.substring(0, 2)];
    return [name];
}
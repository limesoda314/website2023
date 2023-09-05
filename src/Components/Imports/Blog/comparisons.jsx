// used for the sorting options
// will sort by title and by date

export function compareByTitleA(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
}
export function compareByTitleZ(a, b) {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    }
    return 0;
}

export function compareByDateNewest(a, b) {
    
    if ((new Date(a.date).getTime() - new Date(b.date).getTime()) < 0) {
        return 1;
    }
    if ((new Date(a).getTime() - new Date(b).getTime()) > 0) {
        return -1; 
    }
    return 0;
}
export function compareByDateOldest(a, b) {
    if ((new Date(a.date).getTime() - new Date(b.date).getTime()) > 0) {
        return 1;
    }
    if ((new Date(a.date).getTime() - new Date(b.date).getTime()) < 0) {
        return -1; 
    }
    return 0;
}
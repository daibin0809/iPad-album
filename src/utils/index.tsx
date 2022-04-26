export function formateDate(timestamp: number) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth()+1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const week = date.getDay();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return {
    year,
    month,
    day,
    week,
    hours,
    minutes,
    seconds
  }
}

export enum Week {
  '天',
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
}

interface FsDocumentElement extends HTMLElement {
  msRequestFullscreen?: () => void;
  webkitRequestFullScreen?: () => void;
  mozRequestFullScreen?: () => void;
}

export function fullSreen() {
  const el: FsDocumentElement = document.documentElement;
  const rfs =
    el.requestFullscreen ||
    el.webkitRequestFullScreen ||
    el.msRequestFullscreen ||
    el.mozRequestFullScreen;

  rfs && rfs.call(el);
}

interface FsDocument extends Document {
  msExitFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitIsFullScreen?: boolean;
  mozFullScreen?: boolean;
  msFullScreen?: boolean;
}

export function exitScreen() {
  const doc: FsDocument = document;
  const efs = 
    doc.exitFullscreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen ||
    doc.mozCancelFullScreen; 
  efs && efs.call(doc);
}

export function isFullScreen() {
  const doc: FsDocument = document;

  return  !! (       
    doc.fullscreenElement ||       
    doc.webkitIsFullScreen ||
    doc.mozFullScreen ||
    doc.msFullScreen 
  );
}
const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"auth.login":{"uri":"auth\/login","methods":["GET","HEAD"]},"auth.attempt":{"uri":"auth\/login","methods":["POST"]},"auth.logout":{"uri":"auth\/logout","methods":["POST"]},"backoffice.index":{"uri":"backoffice","methods":["GET","HEAD"]},"backoffice.master.class.index":{"uri":"backoffice\/master\/class","methods":["GET","HEAD"]},"backoffice.master.class.fetch":{"uri":"backoffice\/master\/class\/fetch","methods":["GET","HEAD"]},"backoffice.master.class.create":{"uri":"backoffice\/master\/class\/create","methods":["GET","HEAD"]},"backoffice.master.class.show":{"uri":"backoffice\/master\/class\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"backoffice.master.class.store":{"uri":"backoffice\/master\/class\/store","methods":["POST"]},"backoffice.master.class.update":{"uri":"backoffice\/master\/class\/{id}","methods":["PUT"],"parameters":["id"]},"backoffice.master.class.destroy":{"uri":"backoffice\/master\/class\/{id}","methods":["DELETE"],"parameters":["id"]},"backoffice.master.course.index":{"uri":"backoffice\/master\/course","methods":["GET","HEAD"]},"backoffice.master.course.fetch":{"uri":"backoffice\/master\/course\/fetch","methods":["GET","HEAD"]},"backoffice.master.course.create":{"uri":"backoffice\/master\/course\/create","methods":["GET","HEAD"]},"backoffice.master.course.show":{"uri":"backoffice\/master\/course\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"backoffice.master.course.store":{"uri":"backoffice\/master\/course\/store","methods":["POST"]},"backoffice.master.course.update":{"uri":"backoffice\/master\/course\/{id}","methods":["PUT"],"parameters":["id"]},"backoffice.master.course.destroy":{"uri":"backoffice\/master\/course\/{id}","methods":["DELETE"],"parameters":["id"]},"backoffice.master.module.index":{"uri":"backoffice\/master\/module","methods":["GET","HEAD"]},"backoffice.master.module.fetch":{"uri":"backoffice\/master\/module\/fetch","methods":["GET","HEAD"]},"backoffice.master.module.create":{"uri":"backoffice\/master\/module\/create","methods":["GET","HEAD"]},"backoffice.master.module.show":{"uri":"backoffice\/master\/module\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"backoffice.master.module.store":{"uri":"backoffice\/master\/module\/store","methods":["POST"]},"backoffice.master.module.update":{"uri":"backoffice\/master\/module\/{id}","methods":["PUT"],"parameters":["id"]},"backoffice.master.module.destroy":{"uri":"backoffice\/master\/module\/{id}","methods":["DELETE"],"parameters":["id"]},"backoffice.master.student.index":{"uri":"backoffice\/master\/student","methods":["GET","HEAD"]},"backoffice.master.student.fetch":{"uri":"backoffice\/master\/student\/fetch","methods":["GET","HEAD"]},"backoffice.master.student.create":{"uri":"backoffice\/master\/student\/create","methods":["GET","HEAD"]},"backoffice.master.student.show":{"uri":"backoffice\/master\/student\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"backoffice.master.student.store":{"uri":"backoffice\/master\/student\/store","methods":["POST"]},"backoffice.master.student.update":{"uri":"backoffice\/master\/student\/{id}","methods":["PUT"],"parameters":["id"]},"backoffice.master.student.destroy":{"uri":"backoffice\/master\/student\/{id}","methods":["DELETE"],"parameters":["id"]},"backoffice.master.teacher.index":{"uri":"backoffice\/master\/teacher","methods":["GET","HEAD"]},"backoffice.master.teacher.fetch":{"uri":"backoffice\/master\/teacher\/fetch","methods":["GET","HEAD"]},"backoffice.master.teacher.create":{"uri":"backoffice\/master\/teacher\/create","methods":["GET","HEAD"]},"backoffice.master.teacher.show":{"uri":"backoffice\/master\/teacher\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"backoffice.master.teacher.store":{"uri":"backoffice\/master\/teacher\/store","methods":["POST"]},"backoffice.master.teacher.update":{"uri":"backoffice\/master\/teacher\/{id}","methods":["PUT"],"parameters":["id"]},"backoffice.master.teacher.destroy":{"uri":"backoffice\/master\/teacher\/{id}","methods":["DELETE"],"parameters":["id"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };

exports.success = (data) => ({ ok: true, data });
exports.error = (msg) => ({ ok: false, error: msg });

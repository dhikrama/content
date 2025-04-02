CREATE TABLE IF NOT EXISTS _content_info (
  id TEXT PRIMARY KEY,
  data TEXT
);

CREATE TABLE IF NOT EXISTS _content_content (
  path TEXT PRIMARY KEY,
  data TEXT
);

INSERT OR IGNORE INTO _content_info (id, data) 
VALUES ('content', '{}');
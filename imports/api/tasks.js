import { WebApp } from 'meteor/webapp';

const tasks = [
    {
        "id": 1,
        "title": "Duolingo",
        "tags": ["Personal", "Learning"],
        "created_at": "2025-06-10"
    },
    {
        "id": 2,
        "title": "Reading",
        "tags": ["Personal", "Learning", "Hobby"],
        "created_at": "2025-06-10"
    }
]

function parseBody(req, callback) {
  let body = '';
  req.on('data', chunk => (body += chunk));
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      callback(null, data);
    } catch (err) {
      callback(err);
    }
  });
}

WebApp.connectHandlers.use('/', (req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
        res.setHeader('Conetnt-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(tasks));
    }
    else if (method === 'POST') {
        res.writeHead(400);
        res.end("Invalid JSON");
        return
    }
});

WebApp.connectHandlers.use('/createTask', (req, res) => {
    const { method, url } = req;

    if (method === "POST") {
        parseBody(req, (err, body) => {
            if (err) {
                res.writeHead(400);
                res.end("Invalid JSON");
                return
            }
            const newTask = {
                "id": tasks.length + 1,
                "title": body.title,
                "tags": body.tags || [],
                "created_at": new Date().Date
            }
            tasks.push(newTask);
            res.writeHead(201);
            res.end(JSON.stringify(newTask));
        });
    }
});


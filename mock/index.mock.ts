
import type {  MockHandler } from 'vite-plugin-mock-server';

const mocks: MockHandler[] = [
    {
      pattern: '/api/user',
      handle: (req, res) => {
        res.end('Hello world!' + req.url)
      }
    },
    {
      pattern: '/api/test1/*',
      handle: (req, res) => {
        res.end('Hello world!' + req.url)
      }
    },
    {
      pattern: '/api/test1/users/{userId}',
      handle: (req, res, pathVars) => {
        const data = {
          url: req.url,
          pathVars: pathVars
        }
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
      }
    },
    {
      pattern: '/api/test1/users/{userId}/{blogId}',
      handle: (req, res, pathVars) => {
        const data = {
          url: req.url,
          pathVars: pathVars
        }
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
      }
    }
  ]
  
  export default mocks
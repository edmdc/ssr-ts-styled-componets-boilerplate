import loadUserData from "../../utils/apiCalls";
import { matchRoutes } from 'react-router-config';

const routes = [
    {
        loadData: undefined,
        routes: [
            {
                path: "/",
                exact: true
            },
            {
                path: "/users",
                loadData: loadUserData
            }
        ]
    }
];

/* function noOp() { */
/*   console.log("something went wrong here") */
/* } */

export default function getData(path: string) {
  const matches = matchRoutes(routes, path);
  return matches
    .filter(m => !!m.route.loadData)
    .map(async m => await m.route.loadData());
}

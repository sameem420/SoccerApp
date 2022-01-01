import {
  addNewPlayer,
  getPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    // GET - ALL PLAYERS ENDPOINT
    .get(getPlayers)
    // POST ENDPOINT
    .post(addNewPlayer);

  app
    .route("/player/:PlayerId")

    // GET - ONE PLAYER ENDPOINT
    .get(getPlayerById)
    // PUT - UPDATE PLAYER ENDPOINT
    .put(updatePlayer)
    // DELETE - DELETE PLAYER ENDPOINT
    .delete(deletePlayer);
};

export default routes;

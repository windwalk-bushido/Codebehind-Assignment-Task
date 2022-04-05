const main = () => {
  function Team(name, rank, group) {
    this.name = name;
    this.rank = rank;
    this.group = group;
    this.wins = 0;
    this.draws = 0;
    this.loses = 0;
    this.goals_given = 0;
    this.goals_received = 0;
    this.points = 0;
    this.evaluation_points = 0;
  }

  // Zbog boljeg formatiranja imena imaju razmak u imenu
  const Katar = new Team("Katar            ", 51, "A");
  const Ekvador = new Team("Ekvador          ", 46, "A");
  const Senegal = new Team("Senegal          ", 20, "A");
  const Holandija = new Team("Holandija        ", 10, "A");
  let group_A = [Katar, Ekvador, Senegal, Holandija];

  const Engleska = new Team("Engleska         ", 5, "B");
  const Iran = new Team("Iran             ", 21, "B");
  const SAD = new Team("SAD              ", 15, "B");
  const Ukrajina = new Team("Ukrajina         ", 27, "B");
  let group_B = [Engleska, Iran, SAD, Ukrajina];

  const Argentina = new Team("Argentina        ", 4, "C");
  const Saudijska_Arabija = new Team("Saudijska Arabija", 49, "C");
  const Meksiko = new Team("Meksiko          ", 9, "C");
  const Poljska = new Team("Poljska          ", 26, "C");
  let group_C = [Argentina, Saudijska_Arabija, Meksiko, Poljska];

  const Francuska = new Team("Francuska        ", 3, "D");
  const Peru = new Team("Peru             ", 22, "D");
  const Danska = new Team("Danska           ", 11, "D");
  const Tunis = new Team("Tunis            ", 35, "D");
  let group_D = [Francuska, Peru, Danska, Tunis];

  const Spanija = new Team("Spanija          ", 7, "E");
  const Novi_Zeland = new Team("Novi Zeland      ", 101, "E");
  const Nemacka = new Team("Nemacka          ", 12, "E");
  const Japan = new Team("Japan            ", 23, "E");
  let group_E = [Spanija, Novi_Zeland, Nemacka, Japan];

  const Belgija = new Team("Belgija          ", 2, "F");
  const Kanada = new Team("Kanada           ", 38, "F");
  const Maroko = new Team("Maroko           ", 24, "F");
  const Hrvatska = new Team("Hrvatska         ", 16, "F");
  let group_F = [Belgija, Kanada, Maroko, Hrvatska];

  const Brazil = new Team("Brazil           ", 1, "G");
  const Srbija = new Team("Srbija           ", 25, "G");
  const Svajcarska = new Team("Svajcarska       ", 14, "G");
  const Kamerun = new Team("Kamerun          ", 37, "G");
  let group_G = [Brazil, Srbija, Svajcarska, Kamerun];

  const Portugal = new Team("Portugal         ", 8, "H");
  const Gana = new Team("Gana             ", 60, "H");
  const Urugvaj = new Team("Urugvaj          ", 13, "H");
  const Juzna_Koreja = new Team("Juzna Koreja     ", 29, "H");
  let group_H = [Portugal, Gana, Urugvaj, Juzna_Koreja];

  let goals_for_team_1 = null;
  let goals_for_team_2 = null;

  function GetGoals() {
    function RandomNumber() {
      const min = 0;
      const max = 8; // Ne zelim da vredjam nijedan tim ovim ali ovo je samo zbog jednostavnosti...
      return Math.floor(Math.random() * (max - min) + min);
    }

    goals_for_team_1 = RandomNumber();
    goals_for_team_2 = RandomNumber();
  }

  function PrintGroupMatchResult(team1, team2) {
    console.log("\t\t" + team1 + "\t" + goals_for_team_1 + ":" + goals_for_team_2 + "\t" + team2);
  }

  function SimulateGroupMatch(team1, team2) {
    GetGoals();
    team1.goals_given += goals_for_team_1;
    team1.goals_received += goals_for_team_2;
    team2.goals_given += goals_for_team_2;
    team2.goals_received += goals_for_team_1;

    if (goals_for_team_1 > goals_for_team_2) {
      team1.points += 3;
      team1.wins += 1;
      team2.loses += 1;
    } else if (goals_for_team_1 === goals_for_team_2) {
      team1.points += 1;
      team1.draws += 1;
      team2.points += 1;
      team2.draws += 1;
    } else {
      team2.points += 3;
      team2.wins += 1;
      team1.loses += 1;
    }

    PrintGroupMatchResult(team1.name, team2.name);
  }

  function SimulateGroupTournament(group, round) {
    console.log("\tGrupa " + group[0].group + ":");
    switch (round) {
      case 0:
        SimulateGroupMatch(group[0], group[1]);
        SimulateGroupMatch(group[2], group[3]);
        break;
      case 1:
        SimulateGroupMatch(group[0], group[3]);
        SimulateGroupMatch(group[1], group[2]);
        break;
      case 2:
        SimulateGroupMatch(group[0], group[2]);
        SimulateGroupMatch(group[1], group[3]);
        break;
    }
    console.log("\n");
  }

  function SimulateGroupEliminationPhase(round) {
    SimulateGroupTournament(group_A, round);
    SimulateGroupTournament(group_B, round);
    SimulateGroupTournament(group_C, round);
    SimulateGroupTournament(group_D, round);
    SimulateGroupTournament(group_E, round);
    SimulateGroupTournament(group_F, round);
    SimulateGroupTournament(group_G, round);
    SimulateGroupTournament(group_H, round);
  }

  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        console.log("\nGrupna faza - I kolo:\n");
        SimulateGroupEliminationPhase(i);
        break;
      case 1:
        console.log("\n\nGrupna faza - II kolo:\n");
        SimulateGroupEliminationPhase(i);
        break;
      case 2:
        console.log("\n\nGrupna faza - III kolo:\n");
        SimulateGroupEliminationPhase(i);
        break;
    }
  }

  // Resetuje golove na nulu da se ne bi u sledecoj fazi takmicenja preneli rezultati od zadnje utakmice
  goals_for_team_1 = 0;
  goals_for_team_2 = 0;

  function CalculateEvaluationPoints(group) {
    let temp_array = [];
    for (let i = 0; i < group.length; i++) {
      group[i].evaluation_points =
        group[i].points * 16 +
        (group[i].goals_given - group[i].goals_received) * 2 +
        group[i].goals_given * 0.25 +
        group[i].rank * -0.03125;
      if (group[i].evaluation_points < 0) {
        group[i].evaluation_points = (group[i].evaluation_points * -1) / 100;
      }
      temp_array.unshift(group[i].evaluation_points);
    }
    return temp_array;
  }

  function SortArrayByEvaluationPoints(array) {
    return array.sort(function (a, b) {
      return b - a;
    });
  }

  function SortGroupByEvaluationPoints(group, sorted_list) {
    let shifted_group = [];
    for (let i = 0; i < group.length; i++) {
      for (let y = 0; y < group.length; y++) {
        if (sorted_list[i] === group[y].evaluation_points) {
          shifted_group[i] = group[y];
        }
      }
    }
    return shifted_group;
  }

  function FindTeamIndexInGroup(group, array_element) {
    for (let i = 0; i < group.length; i++) {
      if (array_element === group[i].evaluation_points) {
        return group[i];
      }
    }
  }

  function PickGroupWinners(group, sorted_list) {
    let group_winners = [];
    group_winners[0] = FindTeamIndexInGroup(group, sorted_list[0]);
    group_winners[1] = FindTeamIndexInGroup(group, sorted_list[1]);
    return group_winners;
  }

  function PrintGroupResults(group) {
    let goals_given = "";
    let goals_received = "";
    for (let i = 0; i < group.length; i++) {
      // Zbog boljeg formatiranja
      if (group[i].goals_given < 10) {
        goals_given = "0" + group[i].goals_given.toString();
      } else {
        goals_given = group[i].goals_given;
      }
      if (group[i].goals_received < 10) {
        goals_received = "0" + group[i].goals_received.toString();
      } else {
        goals_received = group[i].goals_received;
      }

      console.log(
        "\t\t" +
          (i + 1) +
          ". " +
          group[i].name +
          " (" +
          group[i].rank +
          ")\t" +
          group[i].wins +
          "  " +
          group[i].draws +
          "  " +
          group[i].loses +
          "  " +
          goals_given +
          ":" +
          goals_received +
          "  " +
          group[i].points
      );
    }
  }

  function RoundUpResults(group, winners_group) {
    list_of_evaluation_points = CalculateEvaluationPoints(group);
    sorted_list_of_evaluation_points = SortArrayByEvaluationPoints(list_of_evaluation_points);

    group = SortGroupByEvaluationPoints(group, sorted_list_of_evaluation_points);
    winners_group = PickGroupWinners(group, sorted_list_of_evaluation_points);

    // Zbog boljeg formatiranja
    if (group[0].group === "A") {
      console.log("\n\tGrupa " + group[0].group);
    } else {
      console.log("\n\n\tGrupa " + group[0].group);
    }
    PrintGroupResults(group);

    winners_group[0].group += "1";
    winners_group[1].group += "2";
    return winners_group;
  }

  let group_A_winners = [];
  let group_B_winners = [];
  let group_C_winners = [];
  let group_D_winners = [];
  let group_E_winners = [];
  let group_F_winners = [];
  let group_G_winners = [];
  let group_H_winners = [];

  let list_of_evaluation_points = [];
  let sorted_list_of_evaluation_points = [];

  console.log("\n\nKraj grupne faze. Stanje na tabeli po grupama:");
  for (let i = 0; i < 8; i++) {
    switch (i) {
      case 0:
        group_A_winners = RoundUpResults(group_A, group_A_winners);
        break;
      case 1:
        group_B_winners = RoundUpResults(group_B, group_B_winners);
        break;
      case 2:
        group_C_winners = RoundUpResults(group_C, group_C_winners);
        break;
      case 3:
        group_D_winners = RoundUpResults(group_D, group_D_winners);
        break;
      case 4:
        group_E_winners = RoundUpResults(group_E, group_E_winners);
        break;
      case 5:
        group_F_winners = RoundUpResults(group_F, group_F_winners);
        break;
      case 6:
        group_G_winners = RoundUpResults(group_G, group_G_winners);
        break;
      case 7:
        group_H_winners = RoundUpResults(group_H, group_H_winners);
        break;
    }
  }

  function PrintMatchResult(team1, team2) {
    console.log(
      "\t(" +
        team1.group +
        ") " +
        team1.name +
        "\t" +
        goals_for_team_1 +
        ":" +
        goals_for_team_2 +
        "\t" +
        team2.name +
        " (" +
        team2.group +
        ")"
    );
  }

  function SimulateGame(team1, team2) {
    do {
      GetGoals();
    } while (goals_for_team_1 === goals_for_team_2);
    PrintMatchResult(team1, team2);

    if (goals_for_team_1 > goals_for_team_2) {
      return team1;
    } else {
      return team2;
    }
  }

  let quarter_finalists = [];
  let semi_finalists = [];
  let finalists = [];

  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        console.log("\n\n\n\nEliminaciona faza - osmina finala:\n");
        quarter_finalists.push(SimulateGame(group_A_winners[0], group_E_winners[0]));
        quarter_finalists.push(SimulateGame(group_A_winners[1], group_E_winners[1]));
        quarter_finalists.push(SimulateGame(group_B_winners[0], group_F_winners[0]));
        quarter_finalists.push(SimulateGame(group_B_winners[1], group_F_winners[1]));
        quarter_finalists.push(SimulateGame(group_C_winners[0], group_G_winners[0]));
        quarter_finalists.push(SimulateGame(group_C_winners[1], group_G_winners[1]));
        quarter_finalists.push(SimulateGame(group_D_winners[0], group_H_winners[0]));
        quarter_finalists.push(SimulateGame(group_D_winners[1], group_H_winners[1]));
        break;
      case 1:
        console.log("\n\nEliminaciona faza - cetvrt-finale:\n");
        semi_finalists.push(SimulateGame(quarter_finalists[0], quarter_finalists[4]));
        semi_finalists.push(SimulateGame(quarter_finalists[1], quarter_finalists[5]));
        semi_finalists.push(SimulateGame(quarter_finalists[2], quarter_finalists[6]));
        semi_finalists.push(SimulateGame(quarter_finalists[3], quarter_finalists[7]));
        break;
      case 2:
        console.log("\n\nEliminaciona faza - polufinale:\n");
        finalists.push(SimulateGame(semi_finalists[0], semi_finalists[2]));
        finalists.push(SimulateGame(semi_finalists[1], semi_finalists[3]));
        break;
      case 3:
        console.log("\n\nEliminaciona faza - finale:\n");
        let winner = SimulateGame(finalists[0], finalists[1]);
        console.log("\n\nPobednik:\n\t" + winner.name + "\n");
        break;
    }
  }
};

main();

"use client";
import Card from "@/app/(components)/Card";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSound from "use-sound";

export default function Game({ cards }: any) {

  const [cardIndex, setCardIndex] = useState(0);
  const [someonePlaying, setSomeonePlaying] = useState(true);
  const [team, setTeam] = useState(0); // team 0 is red, team 1 is green
  const [roundSkips, setRoundSkips] = useState(2);
  const [firstTeamScore, setFirstTeamScore] = useState(0);
  const [secondTeamScore, setSecondTeamScore] = useState(0);
  const [counter, setCounter] = useState(60);
  const [play] = useSound("/audio/mixkit-notification-bell-592.wav");

  function lost() { // losing a card
    setSomeonePlaying(false);
  }

  function won() { // winning a card
    setCardIndex(current => current + 1); // Change Card

    if (team === 0) {
      setFirstTeamScore(current => current + 1);
    } else {
      setSecondTeamScore(current => current + 1);
    }
  }

  function skip() { // skipping a card
    setCardIndex(current => current + 1); // Change Card
    setRoundSkips(current => current - 1); // Remove one skip
  }

  function getTeamColor() { // determines the color of the playing team
    switch (team) {
      case 0:
        return "bg-red-700";
      case 1:
        return "bg-green-700";
    }
  }

  function goToNextRound() { // sets up the next round
    setSomeonePlaying(true); // change game state to playing
    setCardIndex(current => current + 1); // Change Card
    setRoundSkips(2); // resets the number of skips available
    setTeam(current => current === 1 ? 0 : 1); // sets the playing team
    setCounter(60);
  }

  useEffect(() => {
    if (someonePlaying && counter > 0) {
      const countdown = setTimeout(() => { // timer display settings
        setCounter(current => current - 1);
      }, 1000);

      return () => clearTimeout(countdown);
    }
  }, [someonePlaying, counter]);

  useEffect(() => {
    if (someonePlaying) {
      const timeout = setTimeout(() => { // timer settings
        setSomeonePlaying(false);
        play();
      }, 60000);

      return () => clearTimeout(timeout);
    }
  }, [someonePlaying]);

  if (cardIndex >= cards.length) {
    return (
      <div className="w-3/4 mx-auto flex flex-col items-stretch">
        <div className="flex flex-col items-center text-center text-2xl md:text-5xl">
          <span className="text-red-600 my-5 md:my-10">Game Over!</span>
          <div className="leading-snug">
            فاز الفريق
            &nbsp;{firstTeamScore > secondTeamScore
              ? <span className="text-red-600">الأحمر</span>
              : <span className="text-green-600">الأخضر</span>}
            &nbsp;
            <span>بمجموع نقاط {Math.max(firstTeamScore, secondTeamScore)} مقابل {Math.min(firstTeamScore, secondTeamScore)}</span>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/game" className="text-lg arabic-regular btn btn-success text-white my-2">
                العب ثانية
              </Link>
              <Link href="/" className="text-lg arabic-regular btn btn-accent text-white my-2  px-8">
                الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-3/4 mx-auto flex flex-col items-stretch">
      <div dir="rtl" className={`w-full ${getTeamColor()} mb-5 text-center arabic-regular text-2xl py-3 rounded-lg`}>
        الفريق {team === 0 ? "احمر" : "اخضر"}
        &nbsp;
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": counter } as any}></span>
        </span>
      </div>
      <div className="flex justify-center">
        <Card
          {...cards[cardIndex]}
        />
      </div>
      <div className="flex flex-col mt-4">
        {someonePlaying ?
          <>
            <button
              className="btn btn-warning text-white mt-4 text-lg arabic-regular"
              disabled={roundSkips === 0}
              onClick={skip}
            >تخطي</button>
            <button
              onClick={won}
              className="btn btn-success text-white mt-4 text-lg arabic-regular"
            >نجحت</button>
            <button
              className="btn bg-red-600 hover:bg-red-500 text-white mt-4 text-lg arabic-regular"
              onClick={lost}
            >خسرت</button>
          </> : <Alert nextRound={goToNextRound} />}
      </div>
    </div >
  );
}

function Alert({ nextRound }: any) {
  return (
    <div role="alert" className="alert alert-error items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>الرجاء تسليم الهاتف لصاحب الدور</span>
      <button onClick={nextRound} className="btn btn-success text-white text-lg arabic-regular">تم الاستلام</button>
    </div>
  );
}


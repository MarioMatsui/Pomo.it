import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/pages/Pomodoro.module.css'
import { ThemeProvider } from 'styled-components'
import * as light from '../styles/theme'

import { Sidebar } from '../components/Sidebar';

interface userGithub {
  name: string;
  avatar_url: string;
}

interface HomeProps {
  user: userGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {
  const { user } = props;

  return (
    <ThemeProvider theme={light}>
      <ChallengesProvider 
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
          <Head>
            <title>Início | Pomo.it</title>
          </Head>
          <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.container}>
              <ExperienceBar />
              <CountdownProvider>
                <section>
                  <div>
                    <Profile {...user} />
                    <CompletedChallenges />
                    <Countdown />
                  </div>
                  <div>
                    <ChallengeBox />
                  </div>
                </section>
              </CountdownProvider>
            </div>
          </div>
      </ChallengesProvider>
    </ThemeProvider>
    )
  }

  export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { username } = ctx.params;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();

    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    return {
      props: {
        user,
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
      },
    };
};
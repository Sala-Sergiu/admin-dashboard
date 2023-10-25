import React, { Component } from "react";
import Icon from "@mdi/react";
import {
  mdiHomeAccount,
  mdiViewDashboardEdit,
  mdiMessage,
  mdiHistory,
  mdiNoteEditOutline,
  mdiAccountGroup,
  mdiCog,
  mdiAccountQuestion,
  mdiShieldCheckOutline,
} from "@mdi/js";

export function Navigation() {
  return (
    <div className="navigation">
      <h1 className="marging-bottom-sm">Dashboard</h1>
      <div className="navigation-elements">
        <span>
          <Icon path={mdiHomeAccount} size={2} />
        </span>
        <p className="text-navigation">Home</p>
      </div>
      <div className="navigation-elements">
        <span>
          <Icon path={mdiViewDashboardEdit} size={2} />
        </span>
        <p className="text-navigation">Profile</p>
      </div>
      <div className="navigation-elements">
        <span>
          <Icon path={mdiMessage} size={2} />
        </span>
        <p className="text-navigation">Messages</p>
      </div>
      <div className="navigation-elements">
        <span>
          <Icon path={mdiHistory} size={2} />
        </span>
        <p className="text-navigation">History</p>
      </div>
      <div className="navigation-elements">
        <span>
          <Icon path={mdiNoteEditOutline} size={2} />
        </span>
        <p className="text-navigation">Tasks</p>
      </div>
      <div className="navigation-elements marging-bottom-sm">
        <span>
          <Icon path={mdiAccountGroup} size={2} />
        </span>
        <p className="text-navigation">Communities</p>
      </div>
      <div className="navigation-elements">
        <span>
          <Icon path={mdiCog} size={2} />
        </span>
        <p className="text-navigation">Settings</p>
      </div>
      <div className="navigation-elements">
        <span>
          <Icon path={mdiAccountQuestion} size={2} />
        </span>
        <p className="text-navigation">Support</p>
      </div>
      <div className="navigation-elements">
        <span>
          <Icon path={mdiShieldCheckOutline} size={2} />
        </span>
        <p className="text-navigation">Privacy</p>
      </div>
    </div>
  );
}

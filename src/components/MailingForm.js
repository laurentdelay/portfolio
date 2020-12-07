import React from "react";

export default function MailingForm({ mailto }) {
  return (
    <div className="column large" id="mailing-form">
      <form>
        <div className="form-control">
          <label for="name">Nom :</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-control">
          <label for="email">Email :</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-control">
          <label for="subject">Sujet :</label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div className="form-control">
          <label for="message">Message :</label>
          <textarea name="message" id="message" />
        </div>
      </form>
    </div>
  );
}

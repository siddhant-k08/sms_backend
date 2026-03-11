const pool = require("../db");

exports.getAllSubscriptions = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM subscriptions ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSubscription = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM subscriptions WHERE subscription_id=$1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching subscription:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createSubscription = async (req, res) => {
  const {
    user_email,
    plan_name,
    start_date,
    end_date,
    monthly_cost,
    status,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO subscriptions
      (user_email,plan_name,start_date,end_date,monthly_cost,status)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *`,
      [user_email, plan_name, start_date, end_date, monthly_cost, status]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateSubscription = async (req, res) => {
  const { id } = req.params;

  const {
    user_email,
    plan_name,
    start_date,
    end_date,
    monthly_cost,
    status,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE subscriptions
       SET user_email=$1,
           plan_name=$2,
           start_date=$3,
           end_date=$4,
           monthly_cost=$5,
           status=$6,
           updated_at=NOW()
       WHERE subscription_id=$7
       RETURNING *`,
      [user_email, plan_name, start_date, end_date, monthly_cost, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteSubscription = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM subscriptions WHERE subscription_id=$1",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting subscription:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
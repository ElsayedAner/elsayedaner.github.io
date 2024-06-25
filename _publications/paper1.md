---
layout: archive
title: "Modeling and Trajectory Tracking Control for a Multi-Section Continuum Manipulator"
collection: publications
permalink: /publications/paper1
excerpt: "Continuum Robot, Mathematical Model, Simulation"
date: 2023-07-10
venue: "Journal of Intelligent & Robotic Systems"
paperurl: "https://link.springer.com/article/10.1007/s10846-023-01896-1"
citation: "Aner, E.A., Awad, M.I. & Shehata, O.M. Modeling and Trajectory Tracking Control for a Multi-Section Continuum Manipulator. J Intell Robot Syst 108, 49 (2023). https://doi.org/10.1007/s10846-023-01896-1"
teaser: "../images/pub_1.png"
published: true
---

<style>
    .pdf-container {
        border: 1px solid #ddd; /* Add a grey border */
        border-radius: 4px; /* Optional: rounds the corners */
        padding: 10px; /* Adds some padding inside the border */
    }

    .pdf-container p {
        text-align: center;
        color: #333;
        font-family: Arial, sans-serif;
    }

    .pdf-container a {
        color: #007BFF;
        text-decoration: none;
    }

    .pdf-container a:hover {
        text-decoration: underline;
    }
</style>

<!-- Publications ----------------------------------->
<div style="display: flex; justify-content: center; align-items: flex-start; gap: 20px; margin-top: 50px;">
  <!-- Abstract Section -->
  <div style="width: 70%; text-align: left;">
    <h3 style="color: #00734D">Abstract:</h3>
    <p style="text-align: justify; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.5; width: 95%;">
      This paper presents a dynamic modeling and trajectory tracking control design for a hyper-redundant continuum manipulator (HRM), which is able to continuously bend along its length. The HRM has the advantages of high flexibility, large workspace, and low inertia, but also poses challenges of complex kinematics, and dynamic coupling. To address these challenges, the kinematics model was developed based on the piecewise constant curvature (PCC) assumption that captures the relationship between the cable lengths, joint angles, and end-effector pose. Inverse kinematics is presented geometrically by solving trigonometric equations. The dynamic model for the continuum robot (CR) is derived using the Euler–Lagrange representation, which incorporates the effects of gravity and elasticity. Accordingly, three control strategies are developed and applied to a two-section continuum robot, which are the inverse dynamic proportional integral derivative controller (PID), fuzzy logic controller (FLC), and sliding mode controller (SMC). We validate our proposed methods through simulations on various 3D trajectories, utilized MATLAB symbolic math toolbox in conjunction with Simulink simulation; demonstrate and evaluate different close-loop dynamic control responses for different scenarios. This simulation used in the creation of a unique animated simulation for a whole 3D continuum robot while tracking its desired trajectories. Finally, the simulation results demonstrate that our proposed methods can effectively control the HRM with high tracking performance, exhibiting enhanced responses in terms of settling time, rising time, and steady-state error. While the developed SMC outperforms Poth's PID and FLC in terms of robustness and settling time (51% and 10.3%), respectively.
    </p>
    <h3 style="display: inline; font-family: 'Times New Roman', Times, serif; font-size: 16px; margin-right: 10px; text-align: justify; color: #00734D">Keywords:</h3>
    <span style="font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.5; text-align: justify;">
      Continuum robotic arm, Dynamics, Hyper-redundant manipulator, Position control, Sliding mode controller, Trajectory control
    </span>
  </div>

  <!-- Image Section -->
  <div style="width: 30%; text-align: center; display: flex; align-items: center; justify-content: center;">
    <a href="../images/p1-f3.png" target="_blank">
      <img src="../images/p1-f3.png" alt="Continuum Manipulator Dynamics" style="width: 100%; max-width: 300px; height: auto; display: block; margin: auto;" />
    </a>
  </div>
</div>
<br>

<div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
  <div style="text-align: center; width: 45%;">
    <a href="https://link.springer.com/article/10.1007/s10846-023-01896-1" target="_blank">
      <img src="../images/p1.jpg" alt="Journal Cover Image" style="width: 30%; display: block; margin: auto;" />
    </a>
    <p style="font-size: 12px; color: black; font-weight: bold;text-align: center">Modeling and Trajectory Tracking Control for a Multi-Section Continuum Manipulator</p>
    <p style="font-size: 14px; text-align: center; color: #B8860B;">Journal of Intelligent & Robotic Systems</p>
  </div>
</div>
<br>

<!-- Embed PDF -->
<div class="pdf-container">
    <object data="../files/s10846-023-01896-1.pdf?inline=true" type="application/pdf" width="100%" height="80px">
        <embed src="../files/s10846-023-01896-1.pdf?inline=true" type="application/pdf" width="100%" height="80px">
            <!-- Fallback content for browsers that don't support embedding PDFs -->
            <p>Your browser does not support PDFs. <a href="../files/s10846-023-01896-1.pdf?inline=true">Download the PDF</a>.</p>
        </embed>
    </object>
</div>

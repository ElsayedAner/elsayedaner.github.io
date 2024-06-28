---
layout: archive
title: "Performance evaluation of PSO-PID and PSO-FLC for continuum robot’s developed modeling and control"
collection: publications
permalink: /publications/paper2
excerpt: "Continuum Robot, Optimization, PSO"
date: 2024-01-06
venue: "Scientific Reports"
paperurl: "https://link.springer.com/article/10.1038/s41598-023-50551-0"
citation: "Aner, E.A., Awad, M.I. & Shehata, O.M. Performance evaluation of PSO-PID and PSO-FLC for continuum robot’s developed modeling and control. Sci Rep 14, 733 (2024). https://doi.org/10.1038/s41598-023-50551-0"
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

<head>
  <link rel="stylesheet" href="../_pages/css/videos.css">
</head>

<!-- Publications ----------------------------------->
<div style="display: flex; justify-content: center; align-items: flex-start; gap: 20px; margin-top: 50px;">
  <!-- Abstract Section -->
  <div style="width: 70%; text-align: left;">
    <h3 style="color: #00734D">Abstract:</h3>
    <p style="text-align: justify; font-family: 'Times New Roman', Times, serif; font-size: 16px; line-height: 1.5; width: 95%;">
      Continuum robots are complex structures that require sophisticated modeling and control methods to achieve accurate position and motion tracking along desired trajectories. They are highly coupled, nonlinear systems with multiple degrees of freedom that pose a signifcant challenge for conventional approaches. In this paper, we propose a system dynamic model based on the Euler–Lagrange formulation with the assumption of piecewise constant curvature (PCC), where we accounts for the elasticity and gravity efects of the continuum robot. We also develop and apply a particle swarm optimization (PSO) algorithm to optimize the parameters of our developed controllers: an inverse dynamic proportional integral derivative (PID) controller and an inverse dynamic fuzzy logic controller (FLC), where we use the integral time of absolute error (ITAE) as the objective function for the PSO algorithm. We validate our proposed model and optimized controllers through diferent designed trajectories, simulated using our developed unique animated MATLAB simulation. The results show that the PSO-PID controller improves the rise time, overshoot percentage, and settling time by 16.3%, 31.1%, and 64.9%, respectively, compared to the PID controller without PSO. The PSO-FLC controller shows the best performance among all controllers, with a settling time of 0.7 s and a rise time of 0.4 s, leading to the highest level of precision in trajectory tracking. The ITAE error for the PSOFLC controller is 11.4% and 29.9% lower than that of the PSO-PID and FLC controllers, respectively.
    </p>
  </div>

  <!-- Image Section -->
  <div style="width: 30%; text-align: center; display: flex; align-items: center; justify-content: center;">
    <a href="../images/p2-f2.png" target="_blank">
      <img src="../images/p2-f2.png" alt="Continuum Manipulator Dynamics" style="width: 100%; max-width: 300px; height: auto; display: block; margin: auto;" />
    </a>
  </div>
</div>
<br>

<!-- ========================== Video ========================== -->
<div id="banner-card">
  <hr>
  <h2 style="color: #00734D">Videos:</h2>
  <div class="video-container">
    <div class="video-group">
        <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/tvBerdMUqiE" title="Performance evaluation of PSO PID and
              PSO FLC for continuum robot’s developed modeling and control" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        <p class="video-description" style="font-size: 15px; font-weight: bold; margin-top: 10px;">
          Performance evaluation of PSO-PID and PSO-FLC for continuum robot’s developed modeling and control</p>
    </div>
  </div>
</div>

<div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
  <div style="text-align: center; width: 45%;">
    <a href="https://link.springer.com/article/10.1038/s41598-023-50551-0" target="_blank">
      <img src="../images/p2.jpg" alt="Journal Cover Image" style="width: 30%; display: block; margin: auto;" />
    </a>
    <p style="font-size: 12px; color: black; font-weight: bold;text-align: center">Performance evaluation of PSO-PID and PSO-FLC for continuum robot’s developed modeling and control</p>
    <p style="font-size: 14px; text-align: center; color: #B8860B;">Scientific Reports</p>
  </div>
</div>
<br>

<!-- ========================== Embed PDF ========================== -->
<div class="pdf-container">
    <object data="../files/s41598-023-50551-0.pdf?inline=true" type="application/pdf" width="100%" height="80px">
        <embed src="../files/s41598-023-50551-0.pdf?inline=true" type="application/pdf" width="100%" height="80px">
            <!-- Fallback content for browsers that don't support embedding PDFs -->
            <p>Your browser does not support PDFs. <a href="../files/s41598-023-50551-0.pdf?inline=true">Download the PDF</a>.</p>
        </embed>
    </object>
</div>
